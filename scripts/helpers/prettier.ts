import { exec } from 'child_process';

export const prettier = (target: string) => {
	exec(`prettier --write "${target}"`);
};
