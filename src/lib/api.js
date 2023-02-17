const URL = "http://localhost:4000/api/v1/";

export async function getAllNotes() {
  const response = await fetch(`${URL}notes`);
  const  data  = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Notes.");
  }

  const transformedNotes = [];
  
  for(const key in (data.data)) {
    transformedNotes.push((data.data[key]))
  };

  return transformedNotes[0];
}

export async function addNote(noteData) {
  const response = await fetch(`${URL}notes`, {
    method: "POST",
    body: JSON.stringify(noteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || "Could not create note.");
  }

  return null;
}

export async function deleteSingleNote(noteId) {
  const response = await fetch(
    `${URL}notes/${noteId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch note.");
  }

  return null;
}
