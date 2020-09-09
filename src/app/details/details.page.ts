import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any;
 slideOpts = {
    autoPlay: {
    delay: 1000,
    disableOnIteraction: false
  }
 };

  constructor(private route: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      console.log('Details: ', details);
      this.details = details;
    });
  }

}
