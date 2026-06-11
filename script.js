/**
 * Grandmaster Chess - Lichess Inspired Refactor
 * Modular structure, enhanced UI patterns, and robust state management.
 */

// --- Constants & Config ---
const PIECES_SVG = {
    white: {
        p: `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5"/></svg>`,
        r: `<svg viewBox="0 0 45 45"><path d="M9 39h27v-3H9v3zM12 36h21l-2-22H14l-2 22zM11 14V9h4v2h5V9h5v2h5V9h4v5" fill="#fff" stroke="#000" stroke-width="1.5"/></svg>`,
        n: `<svg viewBox="0 0 45 45"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff" stroke="#000" stroke-width="1.5"/></svg>`,
        b: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5"><path d="M9 36c3.39-.97 10.11.43 13.5-3 3.39 3.43 10.11 2.03 13.5 3 0 0 1 1 1 3H8c0-2 1-3 1-3z" fill="#fff"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" fill="#fff"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" fill="#fff"/></g></svg>`,
        q: `<svg viewBox="0 0 45 45"><g fill="white" stroke="#000" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm10-3a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm10 3a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM22.5 8a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 2.5 4 2.5 4 2.5 6h17c0-2 0-2 2.5-6 1-2 2.5-2 2.5-4H9z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
        k: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="round"/><path d="M22.5 25s4.5-7.5 3-10c-1.5-2.5-6-2.5-6 0-1.5 2.5 3 10 3 10z" fill="#fff" stroke-linecap="round"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-1-1-13.5-16-13.5S7.5 8.5 3.5 19.5c-3 6 6 10.5 6 10.5v7z" fill="#fff"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke-linecap="round"/></g></svg>`
    },
    black: {
        p: `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#fff" stroke-width="1.5"/></svg>`,
        r: `<svg viewBox="0 0 45 45"><path d="M9 39h27v-3H9v3zM12 36h21l-2-22H14l-2 22zM11 14V9h4v2h5V9h5v2h5V9h4v5" fill="#000" stroke="#fff" stroke-width="1.5"/></svg>`,
        n: `<svg viewBox="0 0 45 45"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#000" stroke="#fff" stroke-width="1.5"/></svg>`,
        b: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="1.5"><path d="M9 36c3.39-.97 10.11.43 13.5-3 3.39 3.43 10.11 2.03 13.5 3 0 0 1 1 1 3H8c0-2 1-3 1-3z" fill="#000"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" fill="#000"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" fill="#000"/></g></svg>`,
        q: `<svg viewBox="0 0 45 45"><g fill="black" stroke="#fff" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm10-3a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm10 3a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM22.5 8a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 2.5 4 2.5 4 2.5 6h17c0-2 0-2 2.5-6 1-2 2.5-2 2.5-4H9z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
        k: `<svg viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-width="1.5"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="round"/><path d="M22.5 25s4.5-7.5 3-10c-1.5-2.5-6-2.5-6 0-1.5 2.5 3 10 3 10z" fill="#000" stroke-linecap="round"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-1-1-13.5-16-13.5S7.5 8.5 3.5 19.5c-3 6 6 10.5 6 10.5v7z" fill="#000"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke-linecap="round"/></g></svg>`
    }
};

class ChessEngine {
    constructor() {
        this.board = [];
        this.turn = 'white';
        this.lastMove = null;
        this.timers = { white: 600, black: 600 };
        this.baseTime = 600;
        this.history = [];
        this.undoStack = [];
        this.captures = { white: [], black: [] };
        this.init();
    }

    init() {
        this.board = Array(8).fill(null).map(() => Array(8).fill(null));
        const layout = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
        for (let i = 0; i < 8; i++) {
            this.board[0][i] = { type: layout[i], color: 'black', hasMoved: false };
            this.board[1][i] = { type: 'p', color: 'black', hasMoved: false };
            this.board[6][i] = { type: 'p', color: 'white', hasMoved: false };
            this.board[7][i] = { type: layout[i], color: 'white', hasMoved: false };
        }
        this.turn = 'white';
        this.lastMove = null;
        this.history = [];
        this.undoStack = [];
        this.captures = { white: [], black: [] };
    }

    getValidMoves(row, col, checkCheck = true) {
        const piece = this.board[row][col];
        if (!piece) return [];
        
        let moves = [];
        const color = piece.color;
        const opp = color === 'white' ? 'black' : 'white';
        
        switch (piece.type) {
            case 'p':
                const dir = color === 'white' ? -1 : 1;
                if (this.isInside(row + dir, col) && !this.board[row + dir][col]) {
                    moves.push({ row: row + dir, col });
                    const startRow = color === 'white' ? 6 : 1;
                    if (row === startRow && !this.board[row + 2 * dir][col]) moves.push({ row: row + 2 * dir, col });
                }
                [-1, 1].forEach(s => {
                    const r = row + dir, c = col + s;
                    if (this.isInside(r, c)) {
                        const t = this.board[r][c];
                        if (t && t.color === opp) moves.push({ row: r, col: c });
                        if (!t && this.lastMove && this.lastMove.piece.type === 'p' && 
                            this.lastMove.toRow === row && this.lastMove.toCol === c && 
                            Math.abs(this.lastMove.fromRow - this.lastMove.toRow) === 2) {
                            moves.push({ row: r, col: c, isEnPassant: true });
                        }
                    }
                });
                break;
            case 'r': moves = this.getSlidingMoves(row, col, [[1,0], [-1,0], [0,1], [0,-1]]); break;
            case 'b': moves = this.getSlidingMoves(row, col, [[1,1], [1,-1], [-1,1], [-1,-1]]); break;
            case 'q': moves = this.getSlidingMoves(row, col, [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1], [-1,1], [-1,-1]]); break;
            case 'n':
                [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]].forEach(d => {
                    const r = row + d[0], c = col + d[1];
                    if (this.isInside(r, c)) {
                        const t = this.board[r][c];
                        if (!t || t.color === opp) moves.push({ row: r, col: c });
                    }
                });
                break;
            case 'k':
                [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]].forEach(d => {
                    const r = row + d[0], c = col + d[1];
                    if (this.isInside(r, c)) {
                        const t = this.board[r][c];
                        if (!t || t.color === opp) moves.push({ row: r, col: c });
                    }
                });
                if (checkCheck && !piece.hasMoved && !this.isInCheck(color)) {
                    if (this.canCastle(row, col, 7)) moves.push({ row, col: 6, isCastling: true, rookFromCol: 7, rookToCol: 5 });
                    if (this.canCastle(row, col, 0)) moves.push({ row, col: 2, isCastling: true, rookFromCol: 0, rookToCol: 3 });
                }
                break;
        }

        if (checkCheck) {
            return moves.filter(m => {
                const prev = this.board[m.row][m.col];
                this.board[m.row][m.col] = piece;
                this.board[row][col] = null;
                const epVictim = m.isEnPassant ? this.board[row][m.col] : null;
                if (m.isEnPassant) this.board[row][m.col] = null;
                
                const safe = !this.isInCheck(color);
                
                this.board[row][col] = piece;
                this.board[m.row][m.col] = prev;
                if (m.isEnPassant) this.board[row][m.col] = epVictim;
                return safe;
            });
        }
        return moves;
    }

    getSlidingMoves(row, col, dirs) {
        const moves = [];
        const p = this.board[row][col];
        dirs.forEach(d => {
            let r = row + d[0], c = col + d[1];
            while (this.isInside(r, c)) {
                if (!this.board[r][c]) moves.push({ row: r, col: c });
                else {
                    if (this.board[r][c].color !== p.color) moves.push({ row: r, col: c });
                    break;
                }
                r += d[0]; c += d[1];
            }
        });
        return moves;
    }

    canCastle(row, col, rCol) {
        const r = this.board[row][rCol];
        if (!r || r.type !== 'r' || r.hasMoved) return false;
        const step = rCol === 7 ? 1 : -1;
        for (let c = col + step; c !== rCol; c += step) {
            if (this.board[row][c]) return false;
            if ((c === col + step || c === col + 2*step)) {
                const temp = this.board[row][c];
                this.board[row][c] = this.board[row][col];
                this.board[row][col] = null;
                const check = this.isInCheck(this.board[row][c].color);
                this.board[row][col] = this.board[row][c];
                this.board[row][c] = temp;
                if (check) return false;
            }
        }
        return true;
    }

    isInCheck(color, b = this.board) {
        let k = null;
        for (let r=0; r<8; r++) for (let c=0; c<8; c++) if (b[r][c]?.type === 'k' && b[r][c]?.color === color) { k = { r, c }; break; }
        if (!k) return false;
        const opp = color === 'white' ? 'black' : 'white';
        for (let r=0; r<8; r++) for (let c=0; c<8; c++) {
            if (b[r][c]?.color === opp) {
                const moves = this.getValidMoves(r, c, false);
                if (moves.some(m => m.row === k.r && m.col === k.c)) return true;
            }
        }
        return false;
    }

    isInside(r, c) { return r >= 0 && r < 8 && c >= 0 && c < 8; }
}

class ChessUI {
    constructor(engine) {
        this.engine = engine;
        this.selected = null;
        this.validMoves = [];
        this.elements = {
            board: document.getElementById('chess-board'),
            history: document.getElementById('move-history'),
            whiteTimer: document.getElementById('white-timer'),
            blackTimer: document.getElementById('black-timer'),
            whiteProgress: document.getElementById('white-progress'),
            blackProgress: document.getElementById('black-progress'),
            whiteTurn: document.getElementById('white-turn'),
            blackTurn: document.getElementById('black-turn'),
            whiteCaptured: document.getElementById('white-captured'),
            blackCaptured: document.getElementById('black-captured'),
            undo: document.getElementById('undo-btn'),
            restart: document.getElementById('restart-btn'),
            timeSelect: document.getElementById('time-control'),
            customMin: document.getElementById('custom-min'),
            applyCustom: document.getElementById('apply-custom-time'),
            promoModal: document.getElementById('promotion-modal'),
            moveCount: document.getElementById('move-count')
        };
        this.timerInterval = null;
        this.setupEvents();
        this.start();
    }

    setupEvents() {
        this.elements.restart.onclick = () => this.start();
        this.elements.undo.onclick = () => this.undo();
        this.elements.timeSelect.onchange = () => {
            this.elements.customMin.value = this.elements.timeSelect.value / 60;
            this.start();
        };
        this.elements.applyCustom.onclick = () => {
            const mins = parseInt(this.elements.customMin.value);
            if (isNaN(mins) || mins < 1) return;
            this.engine.baseTime = mins * 60;
            this.start('custom');
        };
    }

    start(mode = 'preset') {
        clearInterval(this.timerInterval);
        this.engine.init();
        if (mode === 'preset') {
            this.engine.baseTime = parseInt(this.elements.timeSelect.value);
        }
        this.engine.timers = { white: this.engine.baseTime, black: this.engine.baseTime };
        this.selected = null;
        this.validMoves = [];
        this.render();
        this.startTimer();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.engine.timers[this.engine.turn]--;
            if (this.engine.timers[this.engine.turn] <= 0) {
                clearInterval(this.timerInterval);
                alert(`${this.engine.turn === 'white' ? 'Black' : 'White'} wins on time!`);
            }
            this.updateStatus();
        }, 1000);
    }

    render() {
        const { board, lastMove } = this.engine;
        this.elements.board.innerHTML = '';
        for (let r=0; r<8; r++) {
            for (let c=0; c<8; c++) {
                const cell = document.createElement('div');
                cell.className = `cell ${(r+c)%2===0 ? 'light' : 'dark'}`;
                
                if (this.selected?.row === r && this.selected?.col === c) cell.classList.add('selected');
                if (lastMove && ( (lastMove.fromRow === r && lastMove.fromCol === c) || (lastMove.toRow === r && lastMove.toCol === c) )) {
                    cell.classList.add('last-move');
                }

                const move = this.validMoves.find(m => m.row === r && m.col === c);
                if (move) {
                    cell.classList.add('valid-move');
                    if (board[r][c] || move.isEnPassant) cell.classList.add('has-piece');
                }

                const p = board[r][c];
                if (p) {
                    const div = document.createElement('div');
                    div.className = 'piece';
                    div.innerHTML = PIECES_SVG[p.color][p.type];
                    div.draggable = p.color === this.engine.turn;
                    div.ondragstart = (e) => this.onDragStart(r, c, e);
                    cell.appendChild(div);
                }

                cell.onclick = () => this.onClick(r, c);
                cell.ondragover = (e) => e.preventDefault();
                cell.ondrop = (e) => this.onDrop(r, c, e);
                this.elements.board.appendChild(cell);
            }
        }
        this.updateStatus();
    }

    onDragStart(r, c, e) {
        this.selected = { row: r, col: c };
        this.validMoves = this.engine.getValidMoves(r, c);
        e.dataTransfer.setData('text/plain', JSON.stringify({ r, c }));
        this.render();
    }

    onDrop(r, c, e) {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        this.handleMove(data.r, data.c, r, c);
    }

    onClick(r, c) {
        if (this.selected) {
            this.handleMove(this.selected.row, this.selected.col, r, c);
        } else {
            const p = this.engine.board[r][c];
            if (p && p.color === this.engine.turn) {
                this.selected = { row: r, col: c };
                this.validMoves = this.engine.getValidMoves(r, c);
                this.render();
            }
        }
    }

    async handleMove(fR, fC, tR, tC) {
        if (fR === tR && fC === tC) {
            this.selected = null; this.validMoves = []; this.render();
            return;
        }

        const piece = this.engine.board[fR][fC];
        const target = this.engine.board[tR][tC];

        // Drag King to Rook for Castling
        if (piece?.type === 'k' && target?.type === 'r' && piece.color === target.color) {
            const cm = this.engine.getValidMoves(fR, fC).find(m => m.isCastling && m.rookFromCol === tC);
            if (cm) { this.executeMove(fR, fC, cm.row, cm.col, cm); return; }
        }

        const move = this.validMoves.find(m => m.row === tR && m.col === tC);
        if (move) {
            this.executeMove(fR, fC, tR, tC, move);
        } else {
            this.selected = null; this.validMoves = []; this.render();
        }
    }

    async executeMove(fR, fC, tR, tC, move) {
        const piece = this.engine.board[fR][fC];
        
        // Push to undo stack
        this.engine.undoStack.push(JSON.parse(JSON.stringify({
            board: this.engine.board,
            turn: this.engine.turn,
            timers: this.engine.timers,
            history: this.engine.history,
            captures: this.engine.captures,
            lastMove: this.engine.lastMove
        })));

        if (this.engine.board[tR][tC] || move.isEnPassant) this.playSound('capture');
        else this.playSound('move');

        if (move.isEnPassant) {
            this.engine.captures[this.engine.turn].push(this.engine.board[fR][tC]);
            this.engine.board[fR][tC] = null;
        }

        if (move.isCastling) {
            const r = this.engine.board[fR][move.rookFromCol];
            this.engine.board[fR][move.rookToCol] = r;
            this.engine.board[fR][move.rookFromCol] = null;
            r.hasMoved = true;
        }

        if (this.engine.board[tR][tC]) this.engine.captures[this.engine.turn].push(this.engine.board[tR][tC]);
        this.engine.board[tR][tC] = piece;
        this.engine.board[fR][fC] = null;
        piece.hasMoved = true;
        this.engine.lastMove = { fromRow: fR, fromCol: fC, toRow: tR, toCol: tC, piece: { ...piece } };

        if (piece.type === 'p' && (tR === 0 || tR === 7)) {
            piece.type = await this.showPromotion(piece.color);
        }

        // Notation
        const cols = ['a','b','c','d','e','f','g','h'];
        let note = `${piece.type !== 'p' ? piece.type.toUpperCase() : ''}${cols[fC]}${8-fR}→${cols[tC]}${8-tR}`;
        if (move.isCastling) note = move.rookFromCol === 7 ? 'O-O' : 'O-O-O';
        else if (move.isEnPassant) note += ' (e.p.)';
        this.engine.history.push({ color: this.engine.turn, note });

        this.engine.turn = this.engine.turn === 'white' ? 'black' : 'white';
        this.selected = null; this.validMoves = [];
        
        if (this.engine.isInCheck(this.engine.turn)) {
            this.playSound('check');
            if (this.hasNoMoves(this.engine.turn)) setTimeout(() => alert('Checkmate!'), 100);
        }

        this.render();
    }

    async showPromotion(color) {
        return new Promise(res => {
            this.elements.promoModal.style.display = 'flex';
            this.elements.promoModal.querySelectorAll('.promo-option').forEach(opt => {
                const type = opt.dataset.type;
                opt.innerHTML = PIECES_SVG[color][type];
                opt.onclick = () => { this.elements.promoModal.style.display = 'none'; res(type); };
            });
        });
    }

    undo() {
        if (this.engine.undoStack.length === 0) return;
        const s = this.engine.undoStack.pop();
        Object.assign(this.engine, s);
        this.render();
    }

    hasNoMoves(c) {
        for (let r=0; r<8; r++) for (let col=0; col<8; col++) {
            if (this.engine.board[r][col]?.color === c && this.engine.getValidMoves(r, col).length > 0) return false;
        }
        return true;
    }

    updateStatus() {
        const { timers, turn, baseTime, captures, history } = this.engine;
        this.elements.whiteTurn.className = `turn-indicator turn-white ${turn === 'white' ? 'active' : ''}`;
        this.elements.blackTurn.className = `turn-indicator turn-black ${turn === 'black' ? 'active' : ''}`;
        this.elements.whiteTimer.textContent = this.formatTime(timers.white);
        this.elements.blackTimer.textContent = this.formatTime(timers.black);
        this.elements.whiteProgress.style.width = `${(timers.white / baseTime) * 100}%`;
        this.elements.blackProgress.style.width = `${(timers.black / baseTime) * 100}%`;
        
        this.elements.whiteCaptured.innerHTML = captures.white.map(p => `<div class="captured-piece">${PIECES_SVG[p.color][p.type]}</div>`).join('');
        this.elements.blackCaptured.innerHTML = captures.black.map(p => `<div class="captured-piece">${PIECES_SVG[p.color][p.type]}</div>`).join('');
        
        this.elements.history.innerHTML = '';
        for (let i=0; i<history.length; i+=2) {
            const d = document.createElement('div');
            d.className = 'move-row';
            d.innerHTML = `<div class="move-num">${Math.floor(i/2)+1}</div><div class="move-val">${history[i].note}</div><div class="move-val">${history[i+1]?.note || '-'}</div>`;
            this.elements.history.appendChild(d);
        }
        this.elements.history.scrollTop = this.elements.history.scrollHeight;
        this.elements.moveCount.textContent = `${history.length} moves`;
    }

    formatTime(s) { return `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`; }

    playSound(type) {
        if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const o = this.audioCtx.createOscillator();
        const g = this.audioCtx.createGain();
        o.connect(g); g.connect(this.audioCtx.destination);
        o.frequency.value = type === 'capture' ? 200 : (type === 'check' ? 600 : 400);
        g.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.2);
        o.start(); o.stop(this.audioCtx.currentTime + 0.2);
    }
}

const game = new ChessUI(new ChessEngine());
