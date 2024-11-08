import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannedUserNamesService {
  private bannedWords: string[] = [
    // General Profanity
    "ass", "asshole", "bastard", "bitch", "crap", "cunt", "damn", "dick",
    "fucker", "fuck", "hell", "motherfucker", "piss", "shit", "slut", "whore",

    // Sexually Explicit Terms
    "anal", "anus", "ballsack", "blowjob", "boob", "boobs", "breast", "clit",
    "clitoris", "cock", "condom", "cunnilingus", "cum", "dildo", "ejaculation",
    "erection", "fetish", "handjob", "intercourse", "masturbate", "nude",
    "orgasm", "penis", "porn", "pussy", "rape", "scrotum", "semen", "sex",
    "sexual", "testicle", "tit", "tits", "vagina", "vulva", "wank",

    // Hate Speech and Discriminatory Terms
    "chink", "cracker", "dyke", "faggot", "fag", "gook", "homo", "jap", "kike", 
    "nazi", "nigger", "queer", "retard", "spic", "tranny", "wop", "wetback",

    // Violent or Threatening Language
    "abuse", "assassin", "attack", "beat", "bomb", "bully", "burn", "cut",
    "death", "die", "fight", "gun", "harm", "hate", "hurt", "kill", "murder",
    "stab", "suicide", "terror", "terrorist", "violence", "war", "weapon",

    // Terms Related to Illegal Activities
    "acid", "cocaine", "crack", "crime", "dealer", "drunk", "ecstasy",
    "heroin", "joint", "lsd", "marijuana", "meth", "molest", "pedophile",
    "pervert", "pot", "rape", "smack", "smoke", "stoned", "weed",

    // Impersonation and Misleading Terms
    "admin", "administrator", "ceo", "chief", "customer support", "director",
    "founder", "leader", "moderator", "mod", "official", "president", "staff",
    "support", "superuser", "sysadmin", "team", "user support",

    // Offensive Religious Terms
    "allah", "buddha", "christ", "christian", "christianity", "god", "islam",
    "jesus", "jew", "jewish", "mohammed", "muhammad", "satan",

    // Body Parts and Potentially Offensive Slang
    "arse", "boobs", "butt", "crotch", "genitals", "knob", "nipples", "nuts",
    "shaft", "turd", "willy",

    // Drug Terminology and Slang
    "adderall", "amphetamine", "bong", "coke", "crack", "dope", "ecstasy",
    "hash", "heroin", "joint", "ketamine", "meth", "opium", "pills", "pot",
    "quaalude", "reefer", "stoned", "weed",

    // Euphemisms and Abbreviations
    "fml", "ffs", "gtfo", "lmao", "lmfao", "omg", "omfg", "wtf", "wth"
  ];

  constructor() {
    // Optionally, load the list from an external source or API here if needed
  }

  getBannedUserNames(): string[] {
    return this.bannedWords;
  }

  // Check if the username contains banned words
  findBannedWord(username: string): string | null {
    return this.bannedWords.find(word => new RegExp(word, 'i').test(username)) || null;
  }

  // Check if the username is alphanumeric
  isAlphanumeric(username: string): boolean {
    const pattern = /^[A-Za-z0-9_-]+([A-Za-z0-9_-]*|([A-Za-z0-9_\-.]+[A-Za-z0-9_-]))$/;
    return pattern.test(username);
  }
}
