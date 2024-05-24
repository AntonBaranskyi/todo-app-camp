import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { ITodo } from '~store/todo-store/todo.store.types';
import { TodoSlideItem } from '../todo-slide-item';

type Props = {
	todos: ITodo[];
};

export const TodoSlider: React.FC<Props> = ({ todos }): React.ReactNode => {
	return (
		<Swiper slidesPerView={2.2} spaceBetween={50}>
			{todos.map((todo) => (
				<SwiperSlide key={todo.id}>
					<TodoSlideItem todo={todo} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
