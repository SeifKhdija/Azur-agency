import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminProportiesComponent } from './admin/admin-proporties/admin-proporties.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { DeposerAnnonceComponent } from './deposer-annonce/deposer-annonce.component';
import { ContactComponent } from './contact/contact.component';
import { TerrainComponent } from './terrain/terrain.component';
import { HoronaireComponent } from './horonaire/horonaire.component';
import { FooterComponent } from './footer/footer.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { EstimationComponent } from './nos-services/elements/estimation/estimation.component';
import { VenteComponent } from './nos-services/elements/vente/vente.component';
import { AchatComponent } from './nos-services/elements/achat/achat.component';
import { LocationComponent } from './nos-services/elements/location/location.component';
import { LocativeComponent } from './nos-services/elements/locative/locative.component';
import { ConseillerComponent } from './nos-services/elements/conseiller/conseiller.component';
import { JuridiqueComponent } from './nos-services/elements/juridique/juridique.component';
import { ConcentrationComponent } from './nos-services/elements/concentration/concentration.component';
import { AdminBackendComponent } from './admin-backend/admin-backend.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { RechercheformComponent } from './rechercheform/rechercheform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { ListeAnnonceurComponent } from './admin/liste-annonceur/liste-annonceur.component';
import { from } from 'rxjs';
import { AcheterMaisonComponent } from './menu/acheter/acheter-maison/acheter-maison.component';
import { AcheterAppartementComponent } from './menu/acheter/acheter-appartement/acheter-appartement.component';
import { AcheterStudioComponent } from './menu/acheter/acheter-studio/acheter-studio.component';
import { AcheterBureauxComponent } from './menu/acheter/acheter-bureaux/acheter-bureaux.component';
import { LouerMaisonComponent } from './menu/louer/louer-maison/louer-maison.component';
import { LouerAppartementComponent } from './menu/louer/louer-appartement/louer-appartement.component';
import { LouerStudioComponent } from './menu/louer/louer-studio/louer-studio.component';
import { LouerImmeubleComponent } from './menu/louer/louer-immeuble/louer-immeuble.component';
import { LouerBureauxComponent } from './menu/louer/louer-bureaux/louer-bureaux.component';
import { LouerEteComponent } from './menu/louer/louer-ete/louer-ete.component';
import { TerrainHabitationComponent } from './menu/terrain/terrain-habitation/terrain-habitation.component';
import { TerrainAgricoleComponent } from './menu/terrain/terrain-agricole/terrain-agricole.component';
import { AcheterVillaComponent } from './menu/acheter/acheter-villa/acheter-villa.component';
import { LouerVillaComponent } from './menu/louer/louer-villa/louer-villa.component';
import { AcheterImmeubleComponent } from './menu/acheter/acheter-immeuble/acheter-immeuble.component';
import { GestionImagesComponent } from './admin/gestion-images/gestion-images.component';
import { RechercheAsideComponent } from './recherche-aside/recherche-aside.component';
import { ResultatsearchComponent } from './resultatsearch/resultatsearch.component';
import { VacancesComponent } from './menu/vacances/vacances.component';
import { CommercialLouerComponent } from './menu/commercial/commercial-louer/commercial-louer.component';
import { CommercialVenteComponent } from './menu/commercial/commercial-vente/commercial-vente.component';
import { InvestisseurEtrangerComponent } from './investisseur-etranger/investisseur-etranger.component';
import { AdminSidebarComponent } from './admin//admin-sidebar/admin-sidebar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MandatComponent } from './mandat/mandat.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AnnoncesclientComponent } from './annoncesclient/annoncesclient.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminProportiesComponent,
    SigninComponent,
    SinglePropertyComponent,
    DeposerAnnonceComponent,
    ContactComponent,
    TerrainComponent,
    HoronaireComponent,
    FooterComponent,
    NosServicesComponent,
    EstimationComponent,
    VenteComponent,
    AchatComponent,
    LocationComponent,
    LocativeComponent,
    ConseillerComponent,
    JuridiqueComponent,
    ConcentrationComponent,
    AdminBackendComponent,
    ListeContactsComponent,
    RechercheformComponent,
    NavbarComponent,
    CardsComponent,
    ListeAnnonceurComponent,
    AcheterMaisonComponent,
    AcheterAppartementComponent,
    AcheterStudioComponent,
    AcheterBureauxComponent,
    LouerMaisonComponent,
    LouerAppartementComponent,
    LouerStudioComponent,
    LouerImmeubleComponent,
    LouerBureauxComponent,
    LouerEteComponent,
    TerrainHabitationComponent,
    TerrainAgricoleComponent,
    AcheterVillaComponent,
    LouerVillaComponent,
    AcheterImmeubleComponent,
    GestionImagesComponent,
    RechercheAsideComponent,
    ResultatsearchComponent,
    VacancesComponent,
    CommercialLouerComponent,
    CommercialVenteComponent,
    InvestisseurEtrangerComponent,
    AdminSidebarComponent,
    MandatComponent,
    SignupComponent,
    ChangepasswordComponent,
    AnnoncesclientComponent,
    ListecomptesComponent,
    

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
