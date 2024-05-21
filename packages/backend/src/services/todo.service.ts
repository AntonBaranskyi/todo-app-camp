import { TodoType } from '@/types/todos.type';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<TodoType[]> {
		const todos = await prisma.todos.findMany();

		return todos;
	}

	async createOne({
		title,
		completed,
	}: Omit<TodoType, 'id'>): Promise<TodoType> {
		const newTodo = await prisma.todos.create({
			data: {
				title: title,
				completed: completed || false,
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
