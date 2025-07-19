import { User } from "@/generated/prisma";


export const users: User[] = [
	{
		id: 1,
		name: "Alice",
		avaatar: "https://example.com/avatar/alice.jpg",
		email: "alice@example.com",
		password: "password123",
		createdAt: new Date(),
		updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days later
	},
	{
		id: 2,
		name: "Robert",
		avaatar: "https://example.com/avatar/alice.jpg",
		email: "Robert@example.com",
		password: "password123",
		createdAt: new Date(),
		updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days later
	},
];

export class UserRepository {
	async findAllAsync(): Promise<User[]> {
		return users;
	}

	async findByIdAsync(id: number): Promise<User | null> {
		return users.find((user) => user.id === id) || null;
	}
}
