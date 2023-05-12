export const ValiDate = data => {
    const errors = {};
    if (!data.email) {
        errors.email = 'Email required'
    } else {
        delete errors.email
    }
}