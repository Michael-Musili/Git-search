import { ProfileService } from 'src/app/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;

  constructor( private profileService:ProfileService) { 
    this.profileService.getProfileInfo().subscribe( profile =>{
      console.log("profile");
      this.profile = profile;
      
      });
  }

  ngOnInit(): void {
  }

}
