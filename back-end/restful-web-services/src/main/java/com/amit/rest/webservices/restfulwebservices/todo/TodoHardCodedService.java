package com.amit.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "Apple", "This is a fruit", new Date(), false));
		todos.add(new Todo(++idCounter, "LadyFinger", "This is a vegetable", new Date(), false));
		todos.add(new Todo(++idCounter, "Cake", "This is a bakery product", new Date(), false));
		todos.add(new Todo(++idCounter, "CocaCola", "This is a soft drink", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo save(Todo todo){
		if(todo.getId() == -1 || todo.getId() == 0){
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = fingById(id);
		if (todo == null)
			return null;

		if (todos.remove(todo)) {
			return todo;
		}

		return null;
	}

	public Todo fingById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
