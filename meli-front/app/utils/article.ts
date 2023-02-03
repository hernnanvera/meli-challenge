export const getArticleTitle = (id: string | undefined) => {
    return id?.replace(/-/g, " ");
}

export const getArticleID = (title: string | undefined): string | null => {
    if (!title) return null;
    //uncomment if i want the id without the source and without special characters
    // const articleTitle = title.split(" - ")[0];
    // const partialId = title.replace(/[^a-zA-Z0-9 ]/g, "").trim().toLocaleLowerCase();
    const articleId = title.replace(/:/g, " ").replace(/\s/g, "-");
    return articleId;
}