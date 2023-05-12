function pdf() {
    // Declarar variable
    let doc = new jsPDF();

    // Escribir texto
    doc.text(20, 20, "Hola Chicos!");
    doc.text(20, 30, "Recuerden que hoy es el último día de inscripción Tramo 2" + "\n\nÉxitos!!");

    // Generar y guardar PDF
    doc.save('hola_chicos.pdf');
};
