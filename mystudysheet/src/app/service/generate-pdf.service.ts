import { Question } from './../model/question';
import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class GeneratePDFService {
  constructor() {}

  generatePDF(action = 'open', questions: Question[][]) {
    var rows = [];
    var heights = [130, 130, 130, 130, 130];
    if (questions && questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        let row = [];
        for (let j = 0; j < questions[i].length; j++) {
          let r1 = {
            text: '   ' + questions[i][j].operand1,
            alignment: 'center',
            fontSize: 25,
            preserveLeadingSpaces: true,
          };
          let r2 = {
            text: questions[i][j].operator + ' ' + questions[i][j].operand2,
            alignment: 'center',
            fontSize: 25,
          };
          let r3 = {
            canvas: [
              { type: 'line', x1: 30, y1: 5, x2: 95, y2: 5, lineWidth: 2 },
            ],
          };
          let r4 = {
            text: ' ',
            alignment: 'center',
            fontSize: 25,
            preserveLeadingSpaces: true,
          };
          let r5 = {
            text: ' ',
            alignment: 'center',
            preserveLeadingSpaces: true,
          };
          if (questions[i][j].showAnswer) {
            r4 = {
              text: '   ' + questions[i][j].answer,
              alignment: 'center',
              fontSize: 25,
              preserveLeadingSpaces: true,
            };
          }
          let op = [];
          op.push(r5, r1, r2, r3, r4);
          let res = [];
          res.push(op);
          let final = { columns: res };
          row.push(final);
        }
        rows.push(row);
      }
    }

    let docDefinition = {
      pageSize: 'A4',
      content: [
        {
          text: 'www.mystudysheet.com',
          alignment: 'center',
        },
        {
          table: {
            widths: ['*', '*', '*', '*'],
            heights: heights,
            body: rows,
          },
        },
      ],
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }
}
