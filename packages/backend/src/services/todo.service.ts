import { prisma } from '@/app';
import { buildSearchConditions } from '@/helpers/buildSearchConditions';
import { IFindAll } from '@/types/service.types';
import { TodoType } from '@/types/todos.type';

export default class TodoService {
	async findAll({
		userId = null,
		search,
		status,
		sortOrder,
	}: IFindAll): Promise<TodoType[]> {
		const { where, orderBy } = buildSearchConditions({
			userId,
			search,
			status,
			sortOrder,
		});

		const todos = await prisma.todos.findMany({
			where,
			orderBy,
		});

		return todos;
	}

	async createOne({
		title,
		completed,
		description = '',
		isPrivate,
		userId,
	}: Omit<TodoType, 'id'>): Promise<TodoType> {
		const newTodo = await prisma.todos.create({
			data: {
				title: title,
				completed: completed || false,
				description,
				isPrivate,
				userId,
			},
		});

		return newTodo;
	}

	async deleteOne(id: number): Promise<string> {
		await prisma.todos.delete({ where: { id } });

		return `Todo ${id} deleted`;
	}

	async updateOne(id: number, updatedData: TodoType): Promise<TodoType> {
		const updatedUser = await prisma.todos.update({
			where: { id },
			data: { ...updatedData },
		});

		return updatedUser;
	}
}
