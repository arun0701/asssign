import { Component } from '@angular/core';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense-Tracker';
  downloadAsPDF(){
    var element = document.getElementById('pdfTable')
    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()

      var imgHeight = canvas.height * 208 / canvas.width;

      doc.addImage(imgData,0,0,208,imgHeight)
      doc.save("image.pdf")

    })
    
  }


}
