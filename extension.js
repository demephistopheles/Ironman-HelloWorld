"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;


const vscode = require("vscode");

function activate(context) {
    const command1 = vscode.commands.registerCommand('extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(command1);
    const command2 = vscode.commands.registerCommand('extension.helloIronMan', () => {
        vscode.window.showInformationMessage('Hello IronMan!');
    });

    context.subscriptions.push(command2);
}
exports.activate = activate;