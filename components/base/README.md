# Base-folder

This folder includes all the globally registered Vue components.
They can be used in with their name directly without explicit 
imports. For example <base-input> can be used anywhere as is.

The components are registered in /plugins/globalComponents.js, 
and if new components are added to this folder, they need also 
be imported and applied in there.