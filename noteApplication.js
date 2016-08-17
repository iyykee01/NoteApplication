class NotesApplication {
	
	constructor (author) {
	
		this.author = author;
		
		let notes = []
		
		/*
		*this function takes the content as a parameter and adds it to the note list of the object.
		*/

		create (note_content) {
			notes.push(note_content);
		}
		
		/*
		*this function iterates through th notes array and return the index of each items as the "note_id", note_content as 'note content' and the author represent the author 
		*/
		
		listNotes() {
			for(var i in  notes){
				console.log('Note ID: ' + i);
				console.log('note_CONTENT: ' + notes[i]);
				console.log('By Author: ' + this.author);
			}
		}

		/*
		*get the note id and return the content in of that note as a string
		*/

		get_noteId (note_id){
			return notes[note_id]
		}
		
		/*
		*this method returns the takes the search string, search_text and return the notes that text within it in the following format
		*/
		search (search_text) {
			
		}
		
		/*
		* This function deletes the note at the index note_id of the note list
		*/
		delete(note_id){
			note.splice(note_id, 1)
		}
	}
	
}

