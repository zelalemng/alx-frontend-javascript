/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva'
};
const newrowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
