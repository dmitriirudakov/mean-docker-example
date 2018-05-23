import { Component, OnInit } from '@angular/core';

import { Todo, TodoResourceService } from './todo-resource.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public todos: Todo[];
	public displayedColumns = ['name', 'createdAt', 'completed', 'actions'];
	public newTodoName: string;

	constructor(private todoResourceService: TodoResourceService) {
	}

	ngOnInit() {
		this.getAll();
	}

	public create(todoName: HTMLInputElement): void {
		if (!todoName || !todoName.value || !todoName.value.trim()) {
			return;
		}
		this.todoResourceService.create({ name: todoName.value }, () => {
			todoName.value = '';
			this.getAll();
		});
	}

	public toggleCompleted(todo: Todo): void {
		this.todoResourceService.update({ _id: todo._id, completed: todo.completed }, () => {
			this.getAll();
		});
	}

	public remove(todo: Todo): void {
		this.todoResourceService.remove({ _id: todo._id} , () => {
			this.getAll();
		});
	}

	public getAll(): void {
		this.todoResourceService.query().$observable.subscribe(data => {
			this.todos = data;
		});
	}
}
