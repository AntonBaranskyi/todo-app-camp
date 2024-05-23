import React, { useEffect } from 'react';
import { TodosFilter } from '~modules/todos/components/todos-filter';
import { Header } from '~shared/components/header';
import { GlobalContainer } from '~shared/layouts/container.layout';
import { useTodoStore } from '~store/todo-store/todo.store';
import { filtersWrapper } from './todo-home.page.styles';
import { Input } from '~shared/components/input';
import { TodoTable } from '~modules/todos/components/todos-table';
import Loader from '~shared/components/loader/loader.component';
import { Button } from '@blueprintjs/core';
import { Modal } from '~shared/components/modal';
import { CreateModal } from '~modules/todos/components/todo-create-modal';
import { useCommonStore } from '~store/common-store/common.store';
import { useMediaQuery } from 'react-responsive';
import { theme } from '~shared/styles';
import { TodoSlider } from '~modules/todos/components/todo-slider';
import { TodoList } from '~modules/todos/components/todos-list';

export const TodoHomePage = (): React.ReactNode => {
	const { todos, getAllTodo, isLoading, addTodoLoading } = useTodoStore(
		(state) => state,
	);
	const { addTodoModalOpen, toggleModalOpen } = useCommonStore(
		(state) => state,
	);

	const isTablet = useMediaQuery({
		query: `(min-width:${theme.breakpoints.smallTablet})`,
	});

	const isDekstop = useMediaQuery({
		query: `(min-width:${theme.breakpoints.smallDekstop})`,
	});

	useEffect(() => {
		getAllTodo();
	}, []);

	return (
		<>
			<Header />
			<GlobalContainer>
				<div className={filtersWrapper}>
					<TodosFilter />

					<Button text="Create Todo" onClick={toggleModalOpen} />
					<Input type="search" placeholder="Find a todo" />
				</div>

				{isLoading || addTodoLoading ? (
					<Loader />
				) : isDekstop ? (
					<TodoTable todos={todos} />
				) : isTablet ? (
					<TodoSlider todos={todos} />
				) : (
					<TodoList todos={todos} />
				)}
			</GlobalContainer>
			<Modal isOpen={addTodoModalOpen}>
				<CreateModal />
			</Modal>
		</>
	);
};
