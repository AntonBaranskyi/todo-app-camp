import React, { useEffect } from 'react';
import { TodosFilter } from '~modules/todos/components/todos-filter';
import { Header } from '~shared/components/header';
import { GlobalContainer } from '~shared/layouts/container.layout';
import { useTodoStore } from '~store/todo-store/todo.store';
import { filtersWrapper } from './todo-home.page.styles';
import { Input } from '~shared/components/input';
import { TodoTable } from '~modules/todos/components/todos-table';
import { Button } from '@blueprintjs/core';
import { Modal } from '~shared/components/modal';
import { CreateModal } from '~modules/todos/components/todo-create-modal';
import { useCommonStore } from '~store/common-store/common.store';
import { useMediaQuery } from 'react-responsive';
import { theme } from '~shared/styles';
import { TodoSlider } from '~modules/todos/components/todo-slider';
import { TodoList } from '~modules/todos/components/todos-list';
import { useAuthStore } from '~store/auth-store/auth.store';
import { EditUser } from '~modules/auth/components/edit-user';
import { useFilterTodods } from '~modules/todos/hooks/useFilterTodods';
import { TodoPagination } from '~modules/todos/components/todo-desctop-pagination/todo-desktop-pagination.component';
import { PAGINATION } from '~modules/todos/types/todo-pagination.enum';

export const TodoHomePage = (): React.ReactNode => {
	const { todos, getAllTodo, onChangePaginationType } = useTodoStore(
		(state) => state,
	);
	const { addTodoModalOpen, toggleModalOpen, editUserModal } = useCommonStore(
		(state) => state,
	);

	const { setSearchWith, search, sort, status, page } = useFilterTodods();

	const isAuth = useAuthStore((state) => state.isAuth);

	const isTablet = useMediaQuery({
		query: `(min-width:${theme.breakpoints.smallTablet})`,
	});

	const isDekstop = useMediaQuery({
		query: `(min-width:${theme.breakpoints.smallDekstop})`,
	});

	const handleSearchLink = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWith({ search: event.target.value || null });
	};

	useEffect(() => {
		getAllTodo({ search, sort, status, page });
	}, [search, sort, status, page]);

	useEffect(() => {
		if (isDekstop) {
			onChangePaginationType(PAGINATION.DESKTOP);
			setSearchWith({ page: 1 });
			getAllTodo({ search, sort, status, page: 1 });
		} else if (isTablet) {
			onChangePaginationType(PAGINATION.TABLET);
		} else {
			onChangePaginationType(PAGINATION.MOBILE);
		}
	}, [isTablet, isDekstop, search, sort, status]);

	return (
		<>
			<Header />
			<GlobalContainer>
				<div className={filtersWrapper}>
					<TodosFilter />

					{isAuth && (
						<Button text="Create Todo" onClick={toggleModalOpen} />
					)}
					<Input
						type="search"
						placeholder="Find a todo"
						onChange={handleSearchLink}
					/>
				</div>

				{isDekstop && <TodoTable todos={todos} />}
				{isTablet && !isDekstop && <TodoSlider todos={todos} />}
				{!isDekstop && !isTablet && <TodoList todos={todos} />}
				{isDekstop && <TodoPagination />}
			</GlobalContainer>

			<Modal isOpen={addTodoModalOpen}>
				<CreateModal />
			</Modal>

			<Modal isOpen={editUserModal}>
				<EditUser />
			</Modal>
		</>
	);
};
