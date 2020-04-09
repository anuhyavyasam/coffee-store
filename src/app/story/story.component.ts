import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story = "We make coffee! More specifically, we’ve done it for over 20 years. It’s exceptional tasting coffee. And that could be why we’re America’s #1 selling Whole Bean coffee. But it could also be because all our coffee is Organic. And all our coffee is Fairtrade. And it’s all deep and delicious, roasted right in the Canadian Rocky Mountains. It could also be because our customers are loyal, fervent and demand goodness in every cup. And it’s not just our coffee that’s good. We were named the #1 Best Workplace in USA by Great Place to Work® in 2020. We were named a 2019 Fairtrade favourite product. We know how to work hard and have fun. And we think we’re just getting started. We believe great coffee is the answer to many things.";
  constructor() { }

  ngOnInit(): void {

  }

}