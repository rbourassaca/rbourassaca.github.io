#!/usr/bin/env node

import * as fs from 'fs';
import chalk from 'chalk';
import { findString, insertString } from './string.js';
import { writeFile } from './writeFile.js';

const fileMetadata = `${process.cwd()}/src/lib/content/projects/_projectMetadata.ts`;
let search: string;
let insertPositionTarget: string;

export const writeProjectToFile = (name: string) => {
	const fileTarget = `${process.cwd()}/src/lib/content/projects/${name}.svelte`;
	const sampleProject = `${process.cwd()}/src/lib/content/projects/project.svelte.example`;
	fs.readFile(sampleProject, 'utf8', (error, data) => {
		if (error) {
			console.log(chalk.red(error));
		} else {
			writeFile(fileTarget, data);
		}
	});
};

export const writeCategoryToFile = (name: string) => {
	search = 'export const categories: categoryType[]';
	insertPositionTarget = ']';
	fs.readFile(fileMetadata, 'utf-8', (error, data) => {
		if (error) {
			console.log(chalk.red(error));
		} else if (typeof data === 'string') {
			data = insertString(data, findString(data, search, insertPositionTarget), name);
			writeFile(fileMetadata, data);
		}
	});
};

export const writeTagToFile = (name: string, color: string) => {
	search = 'export const tags: tagType[]';
	insertPositionTarget = ']';
	fs.readFile(fileMetadata, 'utf-8', (error, data) => {
		if (error) {
			console.log(chalk.red(error));
		} else {
			data = insertString(
				data,
				findString(data, search, insertPositionTarget),
				`{name: ${name}, colorHex: ${color}}`
			);
			writeFile(fileMetadata, data);
		}
	});
};
