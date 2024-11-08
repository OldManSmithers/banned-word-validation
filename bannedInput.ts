import { BannedUserNamesService } from './banned-usernames.service';

@Component({
    selector: 'app-bannedInput',
    templateUrl: './bannedInput.component.html'
})
export class RegisterComponent {
    user = { username: '' };
    usernameError: string | null = null;
    highlightedUsername: string | null = null;
    constructor(
        private bannedUserNamesService: BannedUserNamesService
    ) { }

    // onBlur simply for effeciency, though you can change this to keyup if so desired.
    onUsernameBlur(): void {
        const { username } = this.user;

        // Reset error and highlighted username
        this.usernameError = null;
        this.highlightedUsername = null;

        // Check for banned words
        const bannedWord = this.bannedUserNamesService.findBannedWord(username);
        if (bannedWord) {
            this.usernameError = 'Username contains restricted words.';

            // Highlight the banned word within the username
            const regex = new RegExp(`(${bannedWord})`, 'i');
            this.highlightedUsername = username.replace(regex, '<span class="highlight">$1</span>');
            return;
        }

        // Alphanumeric check
        const isAlphanumeric = this.bannedUserNamesService.isAlphanumeric(username);
        if (!isAlphanumeric) {
            this.usernameError = 'Username must be alphanumeric and can include hyphens and underscores.';
            return;
        }
    }

    registerUser() {
        // final check in case they register directly from the input
        this.onUsernameBlur();
        if (this.usernameError) {
            return; // Prevent form submission if there's a username error
        }
        // registration code here
    }
    
}
