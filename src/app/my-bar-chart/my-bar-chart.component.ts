import { Component, OnInit } from '@angular/core';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

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

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit(): void {
  }

}
