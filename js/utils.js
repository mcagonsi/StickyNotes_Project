
/**
 * Extract and convert the timestamp from a note ID back to a Date object
 * @param {string} noteId - The note ID in format 'note_timestamp_randomNumber'
 * @returns {Date|null} Date object or null if ID format is invalid
 */
export function parseNoteIdToDate(noteId) {
    // Validate the ID format
    if (!noteId || typeof noteId !== 'string') {
        return null;
    }
    
    // Split the ID by underscores
    const parts = noteId.split('_');
    
    // Check if we have the expected format: ['note', 'timestamp', 'randomNumber']
    if (parts.length !== 3 || parts[0] !== 'note') {
        return null;
    }
    
    // Extract the timestamp part
    const timestamp = parseInt(parts[1], 10);
    
    // Validate that it's a valid number
    if (isNaN(timestamp)) {
        return null;
    }
    
    // Convert timestamp to Date object
    return new Date(timestamp);
}