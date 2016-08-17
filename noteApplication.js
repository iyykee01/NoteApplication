class NotesApplication {
	
	constructor (author) {
	
		this.author = author;
		
		let notes = []
		
		/*
		*this function takes the content as a parameter and adds it to the note list of the object.
		*/
		create (note_content) {
			note.push(note_content);
		}
		
		/*
		*this function iterates through th notes array and return the index of each items as the "note_id", note_content as 'note content' and the author represent the author 
		*/
		listNotes () {
			for(var i in  notes){
				console.log('Note ID: ' + i);
				console.log('note_CONTENT: ' + notes[i]);
				console.log('By Author: ' + this.author);
			}
		}
	}
	
}
