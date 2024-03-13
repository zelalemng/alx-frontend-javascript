export interface MajorCredits {
	credits: number & { __brand: 'Majorcredits.credits' };
}

export interface MinorCredits {
        credits: number & { __brand: 'Minorcredits.credits' };
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return { credits: subject1.credits + subject2.creadit } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits):
 MinorCredits {
        return { credits: subject1.credits + subject2.creadit } as MinorCredits;
}
