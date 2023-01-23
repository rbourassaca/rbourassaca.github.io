#!/usr/bin/env node
import inquirer from 'inquirer';
import { writeProjectToFile, writeCategoryToFile, writeTagToFile } from './helpers/writeToFile.js';
import { validateText, validateColor } from './helpers/validate.js';
import { confirmation } from './helpers/confirmation.js';

const choices: string[] = ['Project', 'Category', 'Tag'];
type content_type = { content_type: string };
type inquirerType = {
	content_type: string;
	project_name: string;
	category_name: string;
	tag_name: string;
	tag_color: string;
};
const questions = [
	{
		name: 'content_type',
		type: 'list',
		message: 'What would you like to add?',
		choices: choices
	},
	// Project
	{
		name: 'project_name',
		type: 'input',
		message: 'What is the name of the project?',
		when: (a: content_type) => a.content_type === choices[0],
		validate: (a: string) => validateText(a)
	},
	// Category
	{
		name: 'category_name',
		type: 'input',
		message: 'What is the name of the category?',
		when: (a: content_type) => a.content_type === choices[1],
		validate: (a: string) => validateText(a)
	},
	// Tag
	{
		name: 'tag_name',
		type: 'input',
		message: 'What is the name of the tag?',
		when: (a: content_type) => a.content_type === choices[2],
		validate: (a: string) => validateText(a)
	},
	{
		name: 'tag_color',
		type: 'input',
		message: 'What is the color of the tag (in hex)?',
		when: (a: content_type) => a.content_type === choices[2],
		validate: (a: string) => validateColor(a)
	}
];

const init = () => {
	inquirer
		.prompt(questions)
		.then((a: inquirerType) => {
			switch (a.content_type) {
				case choices[0]: // Project
					writeProjectToFile(a.project_name);
					break; // Category
				case choices[1]:
					writeCategoryToFile(a.category_name);
					break; // Tag
				case choices[2]:
					writeTagToFile(a.tag_name, a.tag_color);
			}
		})
		.then(() => {
			confirmation();
			console.log('\n');
			init();
		});
};

console.clear();
init();
