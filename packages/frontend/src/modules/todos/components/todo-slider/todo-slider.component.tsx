import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { ITodo } from '~store/todo-store/todo.store.types';
import { TodoSlideItem } from '../todo-slide-item';
import { useFilterTodods } from '~modules/todos/hooks/useFilterTodods';

type Props = {
	todos: ITodo[];
};

export const TodoSlider: React.FC<Props> = ({ todos }): React.ReactNode => {
	const { onHandleSliderReachEnd } = useFilterTodods();
	return (
		<Swiper
			slidesPerView={2}
			slidesPerGroup={2}
			spaceBetween={50}
			navigation
			modules={[Pagination, Navigation]}
			onReachEnd={onHandleSliderReachEnd}
		>
			{todos.map((todo) => (
				<SwiperSlide key={todo.id}>
					<TodoSlideItem todo={todo} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
