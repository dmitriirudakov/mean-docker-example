import { Injectable } from '@angular/core';
import {
	RequestMethod
} from '@angular/http';

import {
	Resource,
	ResourceParams,
	ResourceAction,
	ResourceMethod,
	ResourceMethodStrict
} from 'ngx-resource';

/* tslint:disable:no-empty-interface */
interface IQueryInput {
}

export interface Todo {
	_id?: string;
	name?: string;
	completed?: boolean;
	createdAt?: number;
}

@Injectable({
	providedIn: 'root'
})
@ResourceParams({
	url: 'http://localhost:3000/todos'
})
export class TodoResourceService extends Resource {

	@ResourceAction({ isArray: true })
	query: ResourceMethod <IQueryInput, Todo[]>;

	@ResourceAction({ path: '/{!_id}'})
	get: ResourceMethod <{ _id: any }, Todo>;

	@ResourceAction({ path: '/{!_id}' })
	get2: ResourceMethodStrict <Todo, { _id: any }, Todo>;

	@ResourceAction({ method: RequestMethod.Post })
	save: ResourceMethod <Todo, Todo>;

	@ResourceAction({
		method: RequestMethod.Put,
		path: '/{!_id}'
	})
	update: ResourceMethod <Todo, Todo>;

	@ResourceAction({
		method: RequestMethod.Delete,
		path: '/{!_id}'
	})
	remove: ResourceMethod <{_id: any}, any>;

	// Alias to save
	create(data: Todo, callback?: (res: Todo) => any): Todo {
		return this.save(data, callback);
	}
}
