export const getCurrentDate = () => {
    let d = new Date();
    return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
}