import * as fs from 'fs';
import { prettier } from './prettier.js';
import chalk from 'chalk';

export const writeFile = (file: string, data: string) => {
	fs.writeFile(file, data, 'utf-8', (error) => {
		if (error) {
			console.log(chalk.red(error));
		} else {
			prettier(file);
			return true;
		}
	});
};
