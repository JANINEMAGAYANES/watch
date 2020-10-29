I. Getting Started

      This document serves as a guide to clone the repository and run in a local machine.

II. Prerequisites

      This is the list things you need to use the app:

        Yarn
        Git

III. Installation

      On your CLI:
  
        1. Clone the github repository, feature branch:
  
                git clone -b feature https://github.com/JANINEMAGAYANES/watch.git

        2. Go to the watch folder:

                cd watch

        3. Install dependencies:

                yarn add mobx@5.8.0 mobx-react@6.0 mobx-state-tree
                yarn add expo

        4. Open the expo simulator: 

                expo start

        5. Once the Metro Bundler finished loading, click “Run on iOS simulator”

        6. Because the app is not yet responsive on all devices, select IPAD 2 on the simulator with Landscape Orientation

IV. Instruction

        1. Click “Back” on the top screen to remove the text at the bottom and set back the background to the default image.

        2. Click the Movie Image to view the movie details and change the background.

        3. Click the Movie Image and scroll to either left or right to move the focus.
