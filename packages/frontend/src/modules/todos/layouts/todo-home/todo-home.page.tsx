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

export const TodoHomePage = (): React.ReactNode => {
	const { todos, getAllTodo, isLoading, addTodoLoading } = useTodoStore(
		(state) => state,
	);
	const { addTodoModalOpen, toggleModalOpen } = useCommonStore(
		(state) => state,
	);

	console.dir(todos);

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
				) : (
					<TodoTable todos={todos} />
				)}
			</GlobalContainer>
			<Modal isOpen={addTodoModalOpen}>
				<CreateModal />
			</Modal>
		</>
	);
};
