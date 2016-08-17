class NotesApplication {
	
	constructor (author) {
		this.author = author;
		this.notes = []
		
	/*
	* this function takes the content as a parameter
	*  and adds it to the note list of the object.
	*/

		create (note_content) {
			this.notes.push(note_content);
			return notes;
		}
		
		/*
		*this function iterates through th notes array and 
		* return the index of each items as the "note_id", note_content as 'note content' 
		* 
		and the author represent the author 
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
			return notes[note_id];
		}
		
		/*
		* this method returns the takes the search string, search_text 
		* and return the notes that text within it in the following format
		*/
		search (search_text) {
			for(i in notes){
				if(notes[i] ===  search_text){
					return notes[i];
				}
			}
		}
		
		/*
		* This function deletes the note at the index note_id of the note list
		*/
		delete(note_id){
			notes.splice(note_id, 1);
			return notes;
		}

		/*
		*This funcyion replaces the in content in the 
		*/
		edit(note_id, new_content){
			notes[note_id] = new_content;
			return notes;
		}
	}
	
}



let note = new NotesApplication('kim gassi');
note.create('checkers')
