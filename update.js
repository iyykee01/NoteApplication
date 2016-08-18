function NotesApplication (author){
	this.author = author;
	this.notes = [];
	
	/*
	* this function takes the content as a parameter 
	* and adds it to the note list of the object.
	*/
	
	this.create = function(note_content){
		if(typeof(note_content) === 'string') {
			this.notes.push(note_content)
			return this.notes;
		}
		else{
			return 'Enter a valid Note';
		}
	};
	
	/*
	* this function iterates through th notes array 
	* and return the index of each items as the 
	* "note_id", note_content as 'note content' 
	* and the author represent the author 
	*/
	
	this.listNotes = function() {
		for(var i in  this.notes){
			return ('Note ID: ' + i + '\n' + 'Note_content: ' + this.notes[i]  + '\n' + 'By Author: ' + this.author);
			}
		};
		
	/*
	*get the note id and return the content in of that note as a string
	*/

	this.get_noteId = function(note_id) {
		if(!this.notes[note_id]){
			return 'Note not found';
		}
		else{
			return this.notes[note_id];
		}
	};
	
	/*
	* this method returns the takes the search string, 
	* search_text and return the notes 
	* that text within it in the following format
	*/
		
	this.searches = function(search_text) {
		if(search_text == undefined){
            	   return 'enter a Note'
        };
		for(var i in this.notes){
		   if(search_text === this.notes[i]) {
			return('Showing result for search: ' + search_text + '\n' + 'Note ID: ' + i + '\n' + this.notes[i] + '\n' + 'BY Author: ' + this.author);
			}
                   else{
                        return 'No Note found';
                	}
		}
	};
		
		
	/*
	* This function deletes the note at the index note_id of the note list
	*/
	this.delete_note = function(note_id){
		if(typeof(note_id) === 'number'){
			this.notes.splice(note_id, 1);
			return this.notes;	
		}else{
			return "please enter a number"
		}
			
	}

		/*
		*This funcyion replaces the in content in the 
		*/
		this.edit = function(note_id, new_content){
			this.notes[note_id] = new_content;
			return this.notes;
		}
	
	
	
}


