import './App.css';
import React from 'react';
import CreateNoteForm from './components/CreateNoteForm';

const App = () => {
	return (
		<div>
			<h1>Gestionnaire de notes</h1>
			<CreateNoteForm />
		</div>
	);
};

export default App;
