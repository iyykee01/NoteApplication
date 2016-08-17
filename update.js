class NotesApplication {
	
	constructor (author) {
		this.author = author;
		this.notes = []
	}
		/*
		* this function takes the content as a parameter 
	  	* and adds it to the note list of the object.
		*/
		
		create (note_content) {
			if(typeof(note_content) === 'string'){
				this.notes.push(note_content);
				return this.notes;	
			}
			else{
				return 'Enter a valid word'
			}
		}
		
		/*
		* this function iterates through th notes array 
		* and return the index of each items as the 
		* "note_id", note_content as 'note content' 
		* and the author represent the author 
		*/
		
		listNotes() {
			for(let i in  this.notes){
				console.log('Note ID: ' + i);
				console.log('note_CONTENT: ' + this.notes[i]);
				console.log('By Author: ' + this.author);
			}
		}

		/*
		*get the note id and return the content in of that note as a string
		*/

		get_noteId(note_id) {
			if(!this.notes[note_id]){
				return 'Book not found'
			}
			else{
				return this.notes[note_id];
			}
		}
		
		/*
		* this method returns the takes the search string, 
		* search_text and return the notes 
		* that text within it in the following format
		*/
		
		searches(search_text) {
			for(let i in this.notes){
				if(search_text === this.notes[i]) {
					return 'Showing result for search: ' + search_text;
					return 'Note ID: ' + [i]
					return this.notes[i]
					return  'BY Author ' + [this.author]
				}
			}
		}
		
		/*
		* This function deletes the note at the index note_id of the note list
		*/
		delete_note(note_id){
			this.notes.splice(note_id, 1);
			return this.notes;
		}

		/*
		*This funcyion replaces the in content in the 
		*/
		edit(note_id, new_content){
			this.notes[note_id] = new_content;
			return this.notes;
		}
}