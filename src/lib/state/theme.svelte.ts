type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const SYSTEM_LIGHT = '(prefers-color-scheme: light)';

function readSaved(): Theme | null {
	try {
		const value = localStorage.getItem(STORAGE_KEY);
		return value === 'light' || value === 'dark' ? value : null;
	} catch {
		return null;
	}
}

/**
 * Global theme. The inline script in app.html picks it before first paint:
 * the visitor's saved choice, else the system preference, else dark (the <html> default).
 * Until the visitor picks a theme themselves, the site keeps following the system.
 */
class ThemeState {
	current = $state<Theme>('dark');
	#initialized = false;

	init() {
		this.current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
		if (this.#initialized) return;
		this.#initialized = true;

		matchMedia(SYSTEM_LIGHT).addEventListener('change', (event) => {
			if (!readSaved()) this.#apply(event.matches ? 'light' : 'dark');
		});
	}

	toggle() {
		this.set(this.current === 'dark' ? 'light' : 'dark');
	}

	/** An explicit choice — saved, and from then on the system preference is ignored */
	set(value: Theme) {
		this.#apply(value);
		try {
			localStorage.setItem(STORAGE_KEY, value);
		} catch {
			// Storage can be blocked (private mode) — the theme still applies for this visit
		}
	}

	#apply(value: Theme) {
		this.current = value;
		document.documentElement.dataset.theme = value;
	}
}

export const theme = new ThemeState();
