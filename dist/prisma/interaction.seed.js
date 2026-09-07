import {} from "../src/Domaine/entities/user.js";
import { CommentRepoImpl } from "../src/Infrastructure/repositories/commentRepoImpl.js";
import { NotesRepoImpl } from "../src/Infrastructure/repositories/notesRepoImpl.js";
// Ajuste l'import selon ton fichier
import { faker } from "@faker-js/faker";
export async function seedInteractions(commentRepo, noteRepo, articles, users) {
    for (const article of articles) {
        // On définit combien de personnes vont interagir avec cet article (ex: 1 à 4)
        const interactionCount = faker.number.int({ min: 1, max: 4 });
        for (let i = 0; i < interactionCount; i++) {
            const randomUser = faker.helpers.arrayElement(users);
            // 1. Génération du commentaire
            const commentData = {
                articleId: article.id,
                userId: randomUser.id,
                comment: faker.lorem.sentence(),
            };
            await commentRepo.saveComment(commentData);
            // 2. Génération de la note (respectant createNotesDto)
            const noteData = {
                articleId: article.id,
                userId: randomUser.id,
                number: faker.number.int({ min: 1, max: 5 }), // Note entre 1 et 5
            };
            await noteRepo.createNote(noteData);
            // On suppose que ton repo a une méthode pour les notes, par exemple 'saveNote'
            if (typeof commentRepo.saveNote === "function") {
                await commentRepo.saveNote(noteData);
            }
        }
    }
    console.log(`✅ Interactions (Commentaires + Notes) créées pour ${articles.length} articles.`);
}
