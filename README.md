# Skill Auto Selector Chrome Extension

A Chrome extension that automates the tedious process of entering skills in Workday job application portals, saving valuable time during the job application process.

## Problem Statement

When applying for internships and jobs in the software industry, most companies use Workday portals for their application forms. These portals require candidates to manually enter each skill individually, press enter, and then select the skill from a dropdown menu. This repetitive process is time-consuming and creates unnecessary friction in the job application workflow.

## Solution

This Chrome extension automates the skill entry process by:  
- Automatically adding predefined skills with a single click  
- Adding micro-second gaps between each skill entry for natural interaction  
- Eliminating the need for manual typing and dropdown selection  
- Significantly reducing application completion time  

## Features

- **One-click automation**: Start the skill entry process with a single button click  
- **Customizable skill list**: Easy to modify the list of skills to match your profile  
- **Realistic timing**: Micro-second delays between entries to mimic human interaction  
- **Workday compatibility**: Specifically designed to work with Workday application portals  
- **Lightweight**: Minimal resource usage with clean, efficient code  

## Installation

### From Source Code

1. Clone this repository:  
git clone https://github.com/Shirishreddybandi/skill-auto-selector.git

text
2. Open Chrome and navigate to `chrome://extensions/`  
3. Enable “Developer mode” by toggling the switch in the top right corner  
4. Click “Load unpacked” and select the cloned repository folder  
5. The extension will now appear in your Chrome toolbar  

### From Chrome Web Store

*Coming soon – extension is currently in development*

## Usage

1. Navigate to a Workday job application portal  
2. Locate the skills section in the application form  
3. Click on the Skill Auto Selector extension icon in your Chrome toolbar  
4. Click the “Start Adding Skills” button  
5. Watch as your skills are automatically entered with realistic timing  

## Technical Implementation

The extension uses DOM manipulation to interact with Workday’s skill input fields:  
- Identifies the skill input elements using Chrome DevTools inspection  
- Simulates user input events for each skill  
- Implements timing delays to avoid triggering anti-automation measures  
- Uses content scripts to interact with the web page  

## File Structure

skill-auto-selector/
├── manifest.json # Extension configuration
├── popup.html # Extension popup interface
├── popup.js # Popup functionality
├── content.js # Main automation logic

text

## Customization

To customize the skills list:  
1. Open `content.js`  
2. Modify the `skills` array with your desired skills  
3. Reload the extension in Chrome  

Example:
const skills = [
"JavaScript",
"Python",
"React",
"Node.js",
"SQL",
// Add your skills here
];

text

## Browser Compatibility

- **Chrome**: Fully supported (Manifest V3)  
- **Edge**: Compatible with Chromium-based Edge  
- **Firefox**: Not currently supported (Chrome extension format)  

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'Add amazing feature'`)  
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request  

## Roadmap

- [ ] Add support for custom skill lists via popup interface  
- [ ] Implement skill categorization (technical, soft skills, etc.)  
- [ ] Add timing customization options  
- [ ] Support for other job portals beyond Workday  
- [ ] Chrome Web Store publication  
- [ ] Firefox compatibility  

## Disclaimer

This extension is designed to automate repetitive tasks and improve user experience. Please use responsibly and in accordance with the terms of service of the websites you visit. The developers are not responsible for any consequences arising from the use of this extension.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:  
- Open an issue on GitHub  
- Contact: [Your Email]

## Acknowledgments

- Inspired by the frustrating experience of filling out multiple job applications  
- Built for students and job seekers in the software industry  
- Thanks to the Chrome extension development community for resources and documentation

---

**Made with ❤️ for job seekers everywhere**
