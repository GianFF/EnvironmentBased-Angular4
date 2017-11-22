import {TestBed, ComponentFixture} from '@angular/core/testing';
import {UserComponent} from '../components/user/user.component';
import {environment} from '../environments/environment.prod';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../services/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';

describe('UserComponent', () => {

  let userComponent:    UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ], // declare the test component
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
      ],
      providers: [{provide: 'MyUserService', useClass: environment.userServiceType}],
    });
    fixture = TestBed.createComponent(UserComponent);
    userComponent = fixture.componentInstance; // UserComponent test instance
  });

  it('uses HttpUserService on prod', () => {
    expect(userComponent.userService.areYouFake()).toBe(false);
  });
});
