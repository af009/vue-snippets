
/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window, Mustache */

define(function (require, exports, module) {
    'use strict';

    var AppInit = brackets.getModule('utils/AppInit'),
        EditorManager = brackets.getModule('editor/EditorManager'),
        PreferencesManager = brackets.getModule('preferences/PreferencesManager'),
        Menus = brackets.getModule('command/Menus'),
        CommandManager = brackets.getModule('command/CommandManager'),
        KeyEvent = brackets.getModule('utils/KeyEvent'),
        
        snippets = require('snippet'),
        enabled = false,
        prefs = PreferencesManager.getExtensionPrefs('vue-snippets'),
    
        COMMAND_NAME = 'Enable Vue Snippets',
        COMMAND_ID = 'af009.toggleVueSnippets',
        
        handleToggleSnippets = function () {
            enabled = !enabled;
            prefs.set('enabled', enabled);
            prefs.save();
            CommandManager.get(COMMAND_ID).setChecked(enabled);
        },
        
        applyPreferences = function () {
            enabled = prefs.get('enabled');
            CommandManager.get(COMMAND_ID).setChecked(enabled);
        },
        
        parseLine = function (line, cursorPosition) {
            var words;
            line = line.substring(0, cursorPosition);
            words = line.split(/\W/);
            return words[words.length - 1];
        },
    
        keyEventHandler = function ($event, editor, event) {
            enabled = prefs.get('enabled');
            
            var cursorPosition, line, snippetKey, start;
            
            if (enabled) {
                if ((event.type === 'keydown') && (event.keyCode === KeyEvent.DOM_VK_SPACE)) {
                    cursorPosition = editor.getCursorPos();
                    line = editor.document.getLine(cursorPosition.line);
                    snippetKey = parseLine(line, cursorPosition.ch);

                    if (snippets[snippetKey]) {
                        start = {
                            line: cursorPosition.line,
                            ch: cursorPosition.ch - snippetKey.length
                        };

                        editor.document.replaceRange(snippets[snippetKey], start, cursorPosition);
                        event.preventDefault();
                    }
                }
            }
        },
    
        activeEditorChangeHandler = function ($event, focusedEditor, lostEditor) {
            enabled = prefs.get('enabled');
            if (lostEditor) { $(lostEditor).off('keyEvent', keyEventHandler); }
            if (focusedEditor) { $(focusedEditor).on('keyEvent', keyEventHandler); }
        };
    
    AppInit.appReady(function () {
        enabled = prefs.get('enabled');
        
        // Register toggle command and add it to Edit menu
        CommandManager.register(COMMAND_NAME, COMMAND_ID, handleToggleSnippets);
        Menus.getMenu(Menus.AppMenuBar.EDIT_MENU).addMenuItem(COMMAND_ID);
        
        var currentEditor = EditorManager.getCurrentFullEditor();
        $(currentEditor).on('keyEvent', keyEventHandler);
        $(EditorManager).on('activeEditorChange', activeEditorChangeHandler);
        
        prefs.on('change', applyPreferences);
        applyPreferences();
    });
});