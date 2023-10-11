export default (data)=>{
    const errors = {};

    if (!data.name) {
        errors.e1 = 'El nombre no puede estar vacío';
    }
    if (data.name.length > 15) {
        errors.e2 = 'No puede tener más de 15 caracteres';
    }

    if (/\d/.test(data.name)) {
        errors.p1 = 'El nombre no debe contener números'
    }

    return errors;
};