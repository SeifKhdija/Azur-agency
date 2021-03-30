import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { AuthGardService } from './services/auth-gard.service';
import { DeposerAnnonceComponent } from './deposer-annonce/deposer-annonce.component';
import { ContactComponent } from './contact/contact.component';
import { TerrainComponent } from './terrain/terrain.component';
import { HoronaireComponent } from './horonaire/horonaire.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { VenteComponent } from './nos-services/elements/vente/vente.component';
import { EstimationComponent } from './nos-services/elements/estimation/estimation.component';
import { AchatComponent } from './nos-services/elements/achat/achat.component';
import { LocationComponent } from './nos-services/elements/location/location.component';
import { ConseillerComponent } from './nos-services/elements/conseiller/conseiller.component';
import { JuridiqueComponent } from './nos-services/elements/juridique/juridique.component';
import { ConcentrationComponent } from './nos-services/elements/concentration/concentration.component';
import { LocativeComponent } from './nos-services/elements/locative/locative.component';
import { AdminBackendComponent } from './admin-backend/admin-backend.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { ListeAnnonceurComponent } from './admin/liste-annonceur/liste-annonceur.component';
import { TerrainHabitationComponent } from './menu/terrain/terrain-habitation/terrain-habitation.component';
import { TerrainAgricoleComponent } from './menu/terrain/terrain-agricole/terrain-agricole.component';
import { AcheterMaisonComponent } from './menu/acheter/acheter-maison/acheter-maison.component';
import { AcheterAppartementComponent } from './menu/acheter/acheter-appartement/acheter-appartement.component';
import { AcheterBureauxComponent } from './menu/acheter/acheter-bureaux/acheter-bureaux.component';
import { AcheterVillaComponent } from './menu/acheter/acheter-villa/acheter-villa.component';
import { AcheterStudioComponent } from './menu/acheter/acheter-studio/acheter-studio.component';
import { AcheterImmeubleComponent } from './menu/acheter/acheter-immeuble/acheter-immeuble.component';
import { GestionImagesComponent } from './admin/gestion-images/gestion-images.component';
import { LouerAppartementComponent } from './menu/louer/louer-appartement/louer-appartement.component';
import { LouerMaisonComponent } from './menu/louer/louer-maison/louer-maison.component';
import { LouerVillaComponent } from './menu/louer/louer-villa/louer-villa.component';
import { LouerStudioComponent } from './menu/louer/louer-studio/louer-studio.component';
import { LouerImmeubleComponent } from './menu/louer/louer-immeuble/louer-immeuble.component';
import { LouerBureauxComponent } from './menu/louer/louer-bureaux/louer-bureaux.component';
import { LouerEteComponent } from './menu/louer/louer-ete/louer-ete.component';
import { VacancesComponent } from './menu/vacances/vacances.component';
import { CommercialLouerComponent } from './menu/commercial/commercial-louer/commercial-louer.component';
import { CommercialVenteComponent } from './menu/commercial/commercial-vente/commercial-vente.component';
import { InvestisseurEtrangerComponent } from './investisseur-etranger/investisseur-etranger.component';
import { ResultatsearchComponent } from './resultatsearch/resultatsearch.component';
import { AdminSidebarComponent } from './admin//admin-sidebar/admin-sidebar.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';




const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path: 'admin/dashboard',canActivate: [AuthGardService], component:AdminDashboardComponent},
  {path :'login', component: SigninComponent},
  { path: 'property/:id', component: SinglePropertyComponent },
  {path :'deposer', component: DeposerAnnonceComponent},
  {path :'contact', component: ContactComponent},
  {path :'honoraire', component: HoronaireComponent},
  {path :'terrain', component: TerrainComponent},
  {path :'services', component: NosServicesComponent},
  {path :'contactez-nous', component: VenteComponent},
  {path :'estimation', component: EstimationComponent},
  {path :'achat', component: AchatComponent},
  {path :'politique-de-confidentialite', component: LocativeComponent},
  {path :'mentions-legales', component: LocationComponent},
  {path :'whatsup', component: ConseillerComponent},
  {path :'conditions-generales-vente', component: JuridiqueComponent},
  {path :'concertation', component: ConcentrationComponent},
  {path :'admin', component: AdminBackendComponent},
  {path :'listecontact',canActivate: [AuthGardService], component: ListeContactsComponent},
  {path :'listeannonceur',canActivate: [AuthGardService], component: ListeAnnonceurComponent},
  {path :'terrain-habitation', component: TerrainHabitationComponent},
  {path :'terrain-agricole', component: TerrainAgricoleComponent},
  {path :'acheter-maison', component: AcheterMaisonComponent},
  {path :'acheter-appartement', component: AcheterAppartementComponent},
  {path :'acheter-bureau', component: AcheterBureauxComponent},
  {path :'acheter-villa', component: AcheterVillaComponent},
  {path :'acheter-studio', component: AcheterStudioComponent},
  {path :'acheter-immeuble', component: AcheterImmeubleComponent},
  {path :'gestionimages',canActivate: [AuthGardService], component: GestionImagesComponent},
  {path :'louer-appartement', component: LouerAppartementComponent},
  {path :'louer-maison', component: LouerMaisonComponent},
  {path :'louer-villa', component: LouerVillaComponent},
  {path :'louer-studio', component: LouerStudioComponent},
  {path :'louer-immeuble', component: LouerImmeubleComponent},
  {path :'louer-bureau', component: LouerBureauxComponent},
  {path :'louer-ete', component: LouerEteComponent},
  {path :'vacances', component: VacancesComponent},
  {path :'louer-commercial', component: CommercialLouerComponent},
  {path :'acheter-commercial', component: CommercialVenteComponent},
  {path :'admin-sidebar', component: AdminSidebarComponent},
  {path :'liste-emails', component: ListecomptesComponent},


  {path :'res/:type/:nbpiece/:prix/:ref/:surface', component: ResultatsearchComponent},

  {path :'etranger', component: InvestisseurEtrangerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
