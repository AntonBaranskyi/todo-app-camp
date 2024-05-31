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
		limit,
		page,
	}: IFindAll): Promise<{ todos: TodoType[]; totalItems: number }> {
		const whereCondition = buildSearchConditions({
			userId,
			search,
			status,
		});

		const totalRecords = await prisma.todos.count({
			where: whereCondition,
		});

		const todos = await prisma.todos.findMany({
			where: whereCondition,
			orderBy: { title: sortOrder },
			skip: (page - 1) * limit,
			take: limit,
		});

		console.log(totalRecords);

		return { todos, totalItems: totalRecords };
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

	async findOne(id: number): Promise<TodoType> {
		const todo = (await prisma.todos.findUnique({
			where: { id },
		})) as TodoType;

		return todo;
	}
}
