import React, { useEffect } from 'react';
import { useTodoActions } from '~modules/todos/hooks/useTodoActions';
import { Header } from '~shared/components/header';
import { GlobalContainer } from '~shared/layouts/container.layout';
import {
	buttonStyles,
	loadingWrapper,
	todoCheckedWrapper,
	todoSingleDescrName,
	todoSingleTitle,
} from './todo-detail.styles';
import { Button, Switch } from '@blueprintjs/core';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useTodoStore } from '~store/todo-store/todo.store';
import { ClipLoader } from 'react-spinners';

export const TodoDetailPage = (): React.ReactNode => {
	const { handleChangeStatus } = useTodoActions();
	const { findOneTodo, currentTodoLoading, currentTodo } = useTodoStore(
		(state) => state,
	);
	const { id } = useParams();

	const navigate = useNavigate();

	const handleNavigate = (): void => {
		navigate(ROUTER_KEYS.ALL_MATCH);
	};

	const onHandleChangeStatus = (): void => {
		handleChangeStatus(currentTodo);
	};

	useEffect(() => {
		findOneTodo(+id);
	}, []);

	if (currentTodoLoading) {
		return (
			<div className={loadingWrapper}>
				<ClipLoader size={100} />;
			</div>
		);
	}
	return (
		<>
			<Header />
			<GlobalContainer>
				<h2 className={todoSingleTitle}>{currentTodo?.title}</h2>
				<h4 className={todoSingleDescrName}>Description</h4>
				<p>{currentTodo?.description}</p>
				<div className={todoCheckedWrapper}>
					<h4>Complete</h4>
					<Switch
						checked={currentTodo?.completed}
						large
						onChange={onHandleChangeStatus}
					/>
				</div>

				<Button
					text="Back"
					className={buttonStyles}
					onClick={handleNavigate}
				/>
			</GlobalContainer>
		</>
	);
};
