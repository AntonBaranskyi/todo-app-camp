import React from 'react';
import { useTodoActions } from '~modules/todos/hooks/useTodoActions';
import { Header } from '~shared/components/header';
import { GlobalContainer } from '~shared/layouts/container.layout';
import {
	buttonStyles,
	todoCheckedWrapper,
	todoSingleDescrName,
	todoSingleTitle,
} from './todo-detail.styles';
import { Button, Switch } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

export const TodoDetailPage = (): React.ReactNode => {
	const { currentTodo, handleChangeStatus } = useTodoActions();

	const navigate = useNavigate();

	const handleNavigate = (): void => {
		navigate('/');
	};

	const onHandleChangeStatus = (): void => {
		handleChangeStatus(currentTodo);
	};

	return (
		<>
			<Header />
			<GlobalContainer>
				<h2 className={todoSingleTitle}>{currentTodo.title}</h2>
				<h4 className={todoSingleDescrName}>Description</h4>
				<p>{currentTodo.description}</p>
				<div className={todoCheckedWrapper}>
					<h4>Complete</h4>
					<Switch
						checked={currentTodo.completed}
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
