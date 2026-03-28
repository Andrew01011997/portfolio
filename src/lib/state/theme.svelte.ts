type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/** Global theme. The initial value is applied before hydration by the script in app.html. */
class ThemeState {
	current = $state<Theme>('light');

	init() {
		this.current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	}

	toggle() {
		this.set(this.current === 'dark' ? 'light' : 'dark');
	}

	set(value: Theme) {
		this.current = value;
		document.documentElement.dataset.theme = value;
		try {
			localStorage.setItem(STORAGE_KEY, value);
		} catch {
			// Storage can be blocked (private mode) — the theme still applies for this visit
		}
	}
}

export const theme = new ThemeState();
