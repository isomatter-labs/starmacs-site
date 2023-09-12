---
title: User Customization
description: Making Starmacs your own
---

Starmacs has a literate core config, designed to be perused and understood.
This can be found in `README.org`, and all users are _highly_ encouraged
to give it a look.

This is not, however, where you should make your own changes.
The literate config is designed to be bare-bones, thoroughly documented,
and to be used as a reference. Working in embedded code in Org files is
non-ideal, and forces you to ignore all of the wonderful features Emacs
has for editing elisp code. As a result, your own code should live in
elisp files in:

## The `/usr` Directory

All elisp packages (files ending with `.el` that export a package) that
reside in the `~/.emacs.d/usr` subdirectory will be automatically loaded
on startup. This requires no additional configuration from the user,
and the `/usr` subdirectory is explicitly included in Starmacs'
`.gitignore`, so you don't have to worry about creating merge conflicts.

In order to get started, simply run the following:
```bash
# create the usr directory
mkdir ~/.emacs.d/usr
touch ~/.emacs.d/usr/example.el
```

Now that we've created a module to store some customization in, let's look
at an example:

```lisp
;;; example.el --- An example configuration
;;
;;; Commentary:
;; Author: A Starmacs User
;;
;;; Code:

;;; install a Python linter
(use-package python-black
  :demand t
  :after python
  :hook (python-ts-mode . python-black-on-save-mode-enable-dwim))
  
(provide 'langs)
;;; langs.el ends here
```

Many of the comments in this file are part of the style expected by Emacs,
but you will get style warnings leading you in the right direction, so
there shouldn't be any great trouble creating your own config.

## Why Separate Files?

By putting your configuration in code files, rather than splicing it into
the literate Org-file, you get to take advantage to Emacs' excellent
Elisp programming environment. In addition, this pattern encourages
many, smaller files which are much easier to understand than a large monolith
of code.

## Emacs Lisp

For more information about Emacs Lisp, and how to use it to 
Do Whatever You Want™, take a look at the following resources:

- [Xah Lee's Tutorial](http://xahlee.info/emacs/emacs/elisp.html)
- [Emacs Lisp Cookbook](https://wikemacs.org/wiki/Emacs_Lisp_Cookbook)
- [The Officual GNU Emacs Lisp Reference Manual](https://www.gnu.org/software/emacs/manual/html_node/elisp/index.html)
- [An Introduction to Programming in Emacs Lisp](https://www.gnu.org/software/emacs/manual/html_mono/eintr.html)
- Simply execute `C-h i` (press Control+H, and then press I) and select "Emacs Lisp intro"
